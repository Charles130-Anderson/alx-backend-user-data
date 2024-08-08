#!/usr/bin/env python3
"""
Create SessionAuth that inherits form Auth
"""
from api.v1.auth.auth import Auth
from models.user import User
import uuid


class SessionAuth(Auth):
    """ Session authentication handling class"""
    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """ Creates a Session ID for user_id """

        if user_id is None or isinstance(user_id, str) is False:
            return None

        session_id = str(uuid.uuid4())
        self.user_id_by_session_id[session_id] = user_id

        return session_id

    def user_id_for_session_id(self, session_id: str = None) -> str:
        """Retrieves user id using session id"""
        if session_id is None or isinstance(session_id, str) is False:
            return None

        return self.user_id_by_session_id.get(session_id)

    def current_user(self, request=None):
        """Use session id to Identify user"""
        session_id = self.session_cookie(request)
        user_id = self.user_id_for_session_id(session_id)
        return User.get(user_id)

    def destroy_session(self, request=None):
        """ Deletes user session to logout """
        if request is None:
            return False
        session_id_cookie = self.session_cookie(request)
        if not session_id_cookie:
            return False
        user_id = self.user_id_for_session_id(session_id_cookie)
        if not user_id:
            return False
        del self.user_id_by_session_id[session_id_cookie]
        return True
