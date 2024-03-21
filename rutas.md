https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/auth/register

REGISTER

{
    "email": "andreu@andreu.com",
    "password": "princess"
}

{
    "success": true,
    "message": "User registered succesfully",
    "data": {
        "email": "andreu@andreu.com",
        "password": "$2b$05$N3yfIghcjCHiTsaESNGb6.OB5Aup8XquGwOWBOAuBKsKANTGn9mm6",
        "followers": [],
        "followins": [],
        "role": "user",
        "_id": "65faca3e0dc0dd5a27485651",
        "createdAt": "2024-03-20T11:36:30.095Z",
        "updatedAt": "2024-03-20T11:36:30.095Z"
    }
}


LOGIN

https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/auth/login

{
  "email": "andreu@andreu.com",
  "password": "princess"
}

{
  "success": true,
  "message": "User logged succesfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZhY2EzZTBkYzBkZDVhMjc0ODU2NTEiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA5MzU3MTQsImV4cCI6MTcxMDk0MjkxNH0.d-F3oOCMNmtYcjO_wPfgWuKyy5fjqqsiUJkZpByG9rY"
}









CREAR POST
https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts

{
    "title": "asdasdasdasdas",
    "text": "adasdassdada"
}


{
    "success": true,
    "message": "Post created",
    "data": {
        "title": "asdasdasdasdas",
        "text": "adasdassdada",
        "author": "65faca3e0dc0dd5a27485651",
        "like": [],
        "_id": "65face500dc0dd5a2748565c",
        "createdAt": "2024-03-20T11:53:52.350Z",
        "updatedAt": "2024-03-20T11:53:52.350Z"
    }
}


DELETE POST

https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts/{id}



