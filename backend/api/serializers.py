from rest_framework.serializers import ModelSerializer
from .models import Quote,Comment

class QuoteSerializer(ModelSerializer):
    class Meta:
        model = Quote
        fields = ['quote','author','votes','post_on']
        
class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'quote', 'parent', 'comment']