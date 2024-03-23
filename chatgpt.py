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