from rest_framework import serializers

from .models import Conversation, ConversationMessage
from useraccount.serializers import UserDetailSerializer

class ConversationListSerializer(serializers.ModelSerializer):
    participants = UserDetailSerializer(many=True, read_only=True)

    print("participantssss")
    print(participants)

    class Meta:
        model = Conversation
        fields = ['id', 'participants', 'modified_at']

        