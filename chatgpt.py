import os
import sys
import constants
import discord 
import warnings

import openai
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_openai import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain_community.llms import OpenAI
from langchain_community.vectorstores import Chroma
from discord.ext import commands 


# Suppress all warnings
warnings.filterwarnings("ignore")

os.environ["OPENAI_API_KEY"] = constants.APIKEY

query = None
if len(sys.argv) > 1:
  query = sys.argv[1]

loader = DirectoryLoader("data/")

index = VectorstoreIndexCreator().from_loaders([loader])

chain = ConversationalRetrievalChain.from_llm(
  llm=ChatOpenAI(model="gpt-3.5-turbo"),
  retriever=index.vectorstore.as_retriever(search_kwargs={"k": 1}),
)

os.environ["DISCORD_API_KEY"] = constants.DISCORD_TOKEN

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.command()
async def question(ctx, *, question: str = None):
    if not question:
        # If no question is provided, send a prompt asking for one
        await ctx.send("Please provide a question.")
        return

    try:
        # Process the question as before
        result = chain({"question": question, "chat_history": chat_history})
        await ctx.send(result['answer'])
    except Exception as e:
        # Handle any exceptions as before
        await ctx.send(f"Sorry, I couldn't process your question due to an error: {str(e)}")

chat_history = []

@bot.event
async def on_ready():
    print(f'{bot.user.name} has connected to Discord!')

bot.run(constants.DISCORD_TOKEN)