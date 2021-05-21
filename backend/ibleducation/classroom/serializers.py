from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User

from .models import *


# defining serializers classes

class GreetingSerializer(serializers.ModelSerializer):
	"""serializer class """
	class Meta:
		model = Greeting
		fields = ['author', 'content']


class CourseSerializer(serializers.ModelSerializer):
	"""serializer class """
	class Meta:
		model = Course
		fields = ['id', 'title', 'description', 'instructor', 'created', 'image']


class UserSerializer(serializers.ModelSerializer):
	"""serializer class """
	class Meta:
		model = User
		fields = ['id', 'username', 'password']



# using the UserSerializerWithToken for handling signups
# When a user signs up, we want the response from the server 
# to include both their relevant user data (in this case, just the username), 
# as well as the token
class UserSerializerWithToken(serializers.ModelSerializer):
	"""docstring for ClassName"""
	token = serializers.SerializerMethodField()
	password = serializers.CharField(write_only=True)

	def get_token(self, obj):
		jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
		jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

		payload = jwt_payload_handler(obj)
		token = jwt_encode_handler(payload)
		return token

	def create(self, validated_data):
		password = validated_data.pop('password', None)
		instance = self.Meta.model(**validated_data)
		if password is not None:
			instance.set_password(password)
		instance.save()
		return instance

	class Meta:
		model = User
		fields = ('token', 'username', 'password')
