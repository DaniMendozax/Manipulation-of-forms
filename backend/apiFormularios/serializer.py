from rest_framework import serializers
from .models import NewForm, Reply


class SerializerReply(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = '__all__'

class SerializerForm(serializers.ModelSerializer):
    respuesta = SerializerReply(many=True, required=False)

    class Meta:
        model = NewForm
        fields = '__all__'
