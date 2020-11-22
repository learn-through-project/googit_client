import {
  HOST,
  PORT,
  USERS,
  BRANCHES,
  NOTES,
  NEW,
} from '../constants/urls';
import { POST } from '../constants/httpMethods';

export default async function requestCreateNote(
  newBlocksCandidate,
  currentUser,
  branchId,
) {
  console.log('request');
  const noteCreateRes = await fetch(
    `${HOST}${PORT}${USERS}/${currentUser._id}${BRANCHES}/${branchId}${NOTES}${NEW}`,
    {
      method: POST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_GOOGIT_LOGIN_TOKEN)}`,
      },
      body: JSON.stringify(newBlocksCandidate)
    }
  );

  const noteCreateResponse = await noteCreateRes.json();
  console.log(noteCreateResponse);

  if (noteCreateResponse.result === 'failure') {
    alert('쪽지를 만들다가 문제가 생겼어요');

    // delete branch

    return;
  }

  return noteCreateResponse;
}
