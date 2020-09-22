from django.urls import path
from .list_task.views import TaskList
from .actions_task.views import ActionTask


urlpatterns = [
	
	path('task/list/<str:id_todo>', TaskList.as_view(), name="task_list"),
	path('task/create/', TaskList.as_view(), name="task_create"),

	path('task/update/<str:pk>/', ActionTask.as_view(), name="task_update"),
	path('task/delete/<str:pk>/', ActionTask.as_view(), name="task_delete"),
]