from django.http import JsonResponse, HttpRequest

from .models import Task


def list_users(request: HttpRequest):
    pass


def list_users_tasks(request: HttpRequest, user_id: int):
    pass


def get_task_details(request: HttpRequest, task_id: int):
    # TODO: catch DoesNotExist
    task = Task.objects.get(id=task_id)
    notes = task.tasknote_set.all()

    notes_data = list(
        dict(
            user_id=note.user_id,
            note=note.note
        ) for note in notes
    )
    task_data = dict(
        id=task.id,
        assignee_user_id=task.assignee_user_id,
        title=task.title,
        details=task.details,
        priority_level=task.priority,
        priority_label=task.get_priority_label(),
        is_completed=task.is_completed,
        is_accepted=task.is_accepted,
        created_at=task.created_at,
        notes=notes_data
    )

    return JsonResponse(task_data)
