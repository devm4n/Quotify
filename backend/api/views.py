from django.shortcuts import render
from .serializers import QuoteSerializer,CommentSerializer
from .models import Quote,Comment
from rest_framework.viewsets import ModelViewSet

class QuoteViewset(ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer