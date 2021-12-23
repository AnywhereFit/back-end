# Fitness Anywhere Back End

## Heroku git URL:

https://fitanywhere.herokuapp.com/

[POST] /api/auth/register ( Creates a user using the information sent inside the `request body` ) </br>
[POST] /api/auth/login </br>
[GET] /api/users (TOKEN REQUIRED - RESTRICTED - only users with a valid token can access) </br>
[GET] /api/user/:user_id (TOKEN REQUIRED - RESTRICTED) </br>
[GET] /api/classes (TOKEN REQUIRED - RESTRICTED) </br>
[GET] /api/classes/:class_id (TOKEN REQUIRED - RESTRICTED) </br>

<!-- [PUT] /api/classes/:class_id | Updates the class with the specified `id` using data from the `request body`. Returns the modified class </br> -->
<!-- [DELETE] /api/classes/:class_id | Removes the class with the specified `id` using data from the `request body`. Returns the deleted class </br> -->
<!-- [GET] /api/classes/:user_id/attending (TOKEN REQUIRED - RESTRICTED) </br> -->
<!-- [GET] /api/classes/:user_id/instructing (TOKEN REQUIRED - RESTRICTED) </br> -->

Authentication will be implemented using JSON Web Tokens.

ENDPOINTS:

---------------------------REGISTER-----------------------------------------</br>
To register a new user account requires the following:

[POST] https://fitanywhere.herokuapp.com/api/auth/register

[1] username
[2] password
[3] role - only two options: client or instructor

📝 EXAMPLE

On postman => Select Body - chose raw and change where it said text to JSON

{ "username": "John Doe", "password":"1234", "role_name":"client"}

✅ a successful response will look like this :

{
"username": "John Doe",
"password": "$2a$08$mkxnplwHxlt7tP/ahUBEjuZcJc4FERyICWIAa9moedKbrdsA2GHKS",
"role_id": 1
}

---------------------------LOGIN--------------------------------------------</br>

To Login to the created account use the following:

[POST] https://fitanywhere.herokuapp.com/api/auth/login

to sign in/login into account requires the following:

[1] username
[2] password

📝 EXAMPLE

On postman => Select Body - chose raw and change where it said text to JSON

{ "username": "John Doe", "password":"1234"}

✅ a successful response will send back a token and response will look like the following:

{
"message": "welcome back John Doe",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTY0MDI4MzYzMiwiZXhwIjoxNjQwMzcwMDMyfQ.SJ9SzMUSmWlKrKxtrCRxybI0Hae34ZRIzVHrlng7gj4"
}

---------------------------GET ALL USERS -----------------------------------------</br>
To Get all users use the following:

[GET] https://fitanywhere.herokuapp.com/api/users (TOKEN REQUIRED - RESTRICTED)

To 'get all users' requires the following:

[1] TOKEN (🚨 Tokens are valid for 1 day)

📝 EXAMPLE

On postman => Select Body - None
And Headers :
[1] At KEY put: Authorization
[2] At VALUE put the token without quotes: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTY0MDI4MzYzMiwiZXhwIjoxNjQwMzcwMDMyfQ.SJ9SzMUSmWlKrKxtrCRxybI0Hae34ZRIzVHrlng7gj4

✅ a successful response will look like the following:

[
{
"user_id": 1,
"username": "Priscila",
"password": "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
"role_id": 1,
"created_at": "2021-12-21T21:06:25.112Z",
"updated_at": "2021-12-21T21:06:25.112Z"
},
{
"user_id": 16,
"username": "andrew",
"password": "$2a$08$gqowDYMRfsBcaIojbrMphOrsQluGiSaDS6zrVPr9I21eNKwvDj7Zi",
"role_id": 1,
"created_at": "2021-12-22T21:02:31.412Z",
"updated_at": "2021-12-22T21:02:31.412Z"
},
{
"user_id": 18,
"username": "luis",
"password": "$2a$08$RdP7uTcZF49dUGsHtpq2/euabR8bMGIyCU.QZwlYYgPI1AI2gSQ9q",
"role_id": 2,
"created_at": "2021-12-23T00:12:57.461Z",
"updated_at": "2021-12-23T00:12:57.461Z"
},
{
"user_id": 19,
"username": "John Doe",
"password": "$2a$08$mkxnplwHxlt7tP/ahUBEjuZcJc4FERyICWIAa9moedKbrdsA2GHKS",
"role_id": 1,
"created_at": "2021-12-23T18:17:26.207Z",
"updated_at": "2021-12-23T18:17:26.207Z"
}
]

---------------------------GET USER BY ID -----------------------------------------</br>
To Get a specific user do the following:

[GET] https://fitanywhere.herokuapp.com/api/users/1 (TOKEN REQUIRED - RESTRICTED)

To 'get user by Id' requires the following:

[1] TOKEN (🚨 Tokens are valid for 1 day)

📝 EXAMPLE

On postman => Select Body - None
And Headers :
[1] At KEY put: Authorization
[2] At VALUE put the token without quotes: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTY0MDI4MzYzMiwiZXhwIjoxNjQwMzcwMDMyfQ.SJ9SzMUSmWlKrKxtrCRxybI0Hae34ZRIzVHrlng7gj4

✅ a successful response will look like the following:

[
{
"user_id": 1,
"username": "Priscila",
"password": "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq",
"role_id": 1,
"created_at": "2021-12-21T21:06:25.112Z",
"updated_at": "2021-12-21T21:06:25.112Z"
}
]

---

CLASSES ENDPOINTS:

---------------------------GET ALL CLASSES -----------------------------------------</br>
To Get all users use the following:

[GET] https://fitanywhere.herokuapp.com/api/classes (TOKEN REQUIRED - RESTRICTED)

To 'get all classes' requires the following:

[1] TOKEN (🚨 Tokens are valid for 1 day)

📝 EXAMPLE

On postman => Select Body - None
And Headers :
[1] At KEY put: Authorization
[2] At VALUE put the token without quotes: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTY0MDI4MzYzMiwiZXhwIjoxNjQwMzcwMDMyfQ.SJ9SzMUSmWlKrKxtrCRxybI0Hae34ZRIzVHrlng7gj4

✅ a successful response will look like the following:

[
{
"class_id": 1,
"class_name": "Ashtanga Yoga",
"class_duration": "45 min",
"max_attendees": 10,
"class_date": "2021-12-28T00:00:00.000Z",
"start_time": "10:00:00",
"class_location": "La Jolla Rec Center",
"class_type": "Yoga",
"class_intensity_level": "Beginner",
"class_instructor": 1
},
{
"class_id": 2,
"class_name": "Swimming for beginners",
"class_duration": "45 min",
"max_attendees": 10,
"class_date": "2021-12-28T00:00:00.000Z",
"start_time": "10:00:00",
"class_location": "PIER 42 - Pacific Beach",
"class_type": "swimming",
"class_intensity_level": "Beginner",
"class_instructor": 2
},
{
"class_id": 3,
"class_name": "Hot Yoga",
"class_duration": "45 min",
"max_attendees": 10,
"class_date": "2021-12-28T00:00:00.000Z",
"start_time": "16:00:00",
"class_location": "Body Fit Gym",
"class_type": "Yoga",
"class_intensity_level": "Advanced",
"class_instructor": 1
},
{
"class_id": 4,
"class_name": "Jiu-Jitsu",
"class_duration": "45 min",
"max_attendees": 10,
"class_date": "2021-12-28T00:00:00.000Z",
"start_time": "10:00:00",
"class_location": "Fight Club",
"class_type": "Fight",
"class_intensity_level": "Beginner",
"class_instructor": 3
}
]

---------------------------GET A CLASS BY ID -----------------------------------------</br>
To Get an specific class by Id use the following:

[GET] https://fitanywhere.herokuapp.com/api/classes/1 (TOKEN REQUIRED - RESTRICTED)

To 'get a class by id' requires the following:

[1] TOKEN (🚨 Tokens are valid for 1 day)

📝 EXAMPLE

On postman => Select Body - None
And Headers :
[1] At KEY put: Authorization
[2] At VALUE put the token without quotes: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTY0MDI4MzYzMiwiZXhwIjoxNjQwMzcwMDMyfQ.SJ9SzMUSmWlKrKxtrCRxybI0Hae34ZRIzVHrlng7gj4

✅ a successful response will look like the following:

{
"class_id": 1,
"class_name": "Ashtanga Yoga",
"class_duration": "45 min",
"max_attendees": 10,
"class_date": "2021-12-28T00:00:00.000Z",
"start_time": "10:00:00",
"class_location": "La Jolla Rec Center",
"class_type": "Yoga",
"class_intensity_level": "Beginner",
"class_instructor": 1
}

From now on is not done yet ...
[GET] /api/classes/:user_id/attending (TOKEN REQUIRED - RESTRICTED)

A specific user can get all classes that will attend.

[
{
"user_id": 2,
"username": "Andrew",
"class_id": 1,
"class_name": "Hot Yoga",
"class_duration": "1 hour",
"max_class_size": 25,
"class_date": "...",
"start_time": "07:00:00",
"class_location": "Body Fit Gym",
"class_type": "Yoga",
"class_intensity": "Advanced",
"class_instructor": 1
},
{
"user_id": 2,
"username": "Andrew",
"class_id": 1,
"class_name": "Ashtanga Yoga",
"class_duration": "45 min",
"max_class_size": 10,
"class_date": "...",
"start_time": "10:00:00",
"class_location": "La Jolla",
"class_type": "Yoga",
"class_intensity": "Beginner",
"class_instructor": 1
}
]

[GET] /api/classes/:user_id/instructing (TOKEN REQUIRED - RESTRICTED)

A specific instructor can get all classes that will instruct.

[
{
"username": "Priscila"
"class_id": 1,
"class_name": "Ashtanga Yoga",
"class_duration": "45 min",
"max_class_size": 10,
"class_date": "...",
"start_time": "10:00:00",
"class_location": "La Jolla",
"class_type": "Yoga",
"class_intensity": "Beginner",
"class_instructor": 1
"number_registered": 10
},
{
"class_id": 3,
"class_name": "Hot Yoga",
"class_duration": "1 hour",
"max_class_size": 25,
"class_date": "...",
"start_time": "07:00:00",
"class_location": "Body Fit Gym",
"class_type": "Yoga",
"class_intensity": "Advanced",
"class_instructor": 1
"number_registered": 20
}
]

config Vars:

key
DATABASE_URL

Value
postgres://luhpcmpnmnrjbq:447620f131aea7135940123403c4e8c3e584d4e6397d53bcaff2182a09b3e146@ec2-52-70-205-234.compute-1.amazonaws.com:5432/d5a5jt3qfmj0ea

## Scripts

- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.

## Hot Tips

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- Revealing crash messages to clients is a security risk, but during development it's helpful if your frontend devs are able to tell you what crashed.

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.

- If your fronted devs are interested in running the API locally, help them set up PostgreSQL & pgAdmin in their machines, and teach them how to run migrations in their local. This empowers them to (1) help you troubleshoot bugs, (2) obtain the latest code by simply doing `git pull` and (3) work with their own data, without it being wiped every time you roll back the Heroku db. Collaboration is more fun and direct, and you don't need to deploy as often.

## Contributors

Thanks goes to these back end people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>

<tr>
<td align="center"><a href="https://github.com/djho57"><img src="https://avatars.githubusercontent.com/u/88899732?v=4" width="90px;" alt="Daniel Ho"/><br /><sub><b>Daniel Ho</b></sub></a>
</tr>

<td align="center"><a href="https://github.com/PriscilaMonteiro "><img src="https://avatars.githubusercontent.com/u/77358128?v=4" width="90px;" alt="Priscila Monteiro"/><br /><sub><b>Priscila Monteiro</b></sub></a><br />
