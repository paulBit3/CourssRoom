from django.db import models
from django.contrib.auth.models import User
# Create your models here.




class Greeting(models.Model):
	"""docstring for Greeting"""
	author = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
	content = models.TextField(max_length=100)
	date = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.content

	class Meta:
		ordering = ['-date']
		

class Course(models.Model):
	"""docstring for Course"""
	title = models.CharField(max_length=100)
	description = models.TextField(max_length=200)
	instructor = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
	created = models.DateTimeField(auto_now_add=True)
	last_updated = models.DateTimeField(auto_now=True)
	image = models.FileField(upload_to='images/%Y/%m/%d/', blank=True)
	show = models.BooleanField(default=False)

	def __str__(self):
		return 'Catalog {} > {} - Instructors {}'.format(self.title, self.description, self.instructor)[:30]

	class Meta:
		ordering = ['-created']


class Enrollment(models.Model):
	"""docstring for Enrollment"""
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	enrollment_date = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.enrollment_date

		
	

