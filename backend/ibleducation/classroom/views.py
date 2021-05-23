from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import *
from .serializers import GreetingSerializer, CourseSerializer, UserSerializerWithToken


# Create your views here.



class CreateUserView(APIView):
	"""docstring for CreatUserView. create a new user"""

	#permission_classes = (IsAuthenticated,)
	permission_classes = (permissions.AllowAny,)

	def post(self, request, format='json'):
		
		serializer = UserSerializerWithToken(data = request.data)

		# print(serializer)
		
		if serializer.is_valid():
			# password = serializer.validated_data.get('password')
			# serializer.validated_data['password']=make_password(password)
			user = serializer.save()
			if user:
				json = serializer.data
				return Response(json, status=status.HTTP_201_CREATED)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateGreeting(APIView):
	"""docstring for CreatGreeting. Create a new geeting"""

	permission_classes = (IsAuthenticated,)
	#authentication_classes = (TokenAuthentication,)
	permission_classes = (permissions.AllowAny,)
	
	def post(self, request, *args, **kwargs):
		'''
        Create the Greeting with given greeting data
        '''
		#author = request.user.id
		content = request.data.get('content')

		data = { 'author': request.user.id, 'content': content }

		serializer = GreetingSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateCourse(APIView):
	""" docstring for CreateCourse. Create a new course """
	permission_classes = (IsAuthenticated,)
	permission_classes = (permissions.AllowAny,)

	def post(self, request, *args, **kwargs):
		title = request.data.get('title')
		description = request.data.get('description')
		instructor = request.user.id
		image = request.data.get('image')

		data = { 'title': title, 'description': description, 'instructor': instructor, 'image': image }

		serializer = CourseSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)