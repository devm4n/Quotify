from django.contrib import admin
from django.urls import path,include
from api import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/comment/",views.CommentViewSet.as_view()),
    path("api/quote/",views.QuoteViewSet.as_view()),
]
