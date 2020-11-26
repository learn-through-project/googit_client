import React from 'react';
import { SharedUserListWrapper, PermissionUpdateForm, SharedUserListMain, SharedListHeader } from '../styledComponents';
import Button, { permissionHandleButtonTheme } from '../../shared/Button';

export default function SharedUserList({ sharedUsers, submitHandler, onClick }) {
  function clickHandler(event) {
    onClick(event.target.value);
  }

  return (
    <SharedUserListWrapper>
      <SharedListHeader>공유 중인 유저</SharedListHeader>
      <SharedUserListMain>
        {sharedUsers && sharedUsers.map((user, i) => (
          <PermissionUpdateForm key={i} onSubmit={submitHandler}>
            <input
              name='email'
              value={user.sharedUser.email}
              style={{ backgroundColor: 'transparent', border: 'none', color: 'black', fontSize: '1em' }}
              disabled
            />
            <select name='permission'>
              <option>{user.permission}</option>
              <option>{user.permission ? 'write' : 'read only'}</option>
            </select>
            <div>
              <Button
                theme={permissionHandleButtonTheme}
                onClick={clickHandler}
                name='update'
                value='update'
              >
                수정
                </Button>
              <Button
                theme={permissionHandleButtonTheme}
                onClick={clickHandler}
                name='delete'
                value='delete'
              >
                삭제
              </Button>
            </div>
          </PermissionUpdateForm>
        ))}
      </SharedUserListMain>
    </SharedUserListWrapper>
  );

}