## API TODO DOCUMENTATION

#### Register

```http
  POST /auth/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Full Name |
| `username` | `string` | **Required**. Username |
| `email` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### Login

```http
  POST /auth/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### Create Todo

```http
  POST /todo
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `value` | `string` | `value todo` |

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `Token` |


#### Read All todo by userID

```http
  GET /todo
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `JWT Token` |


#### Read todo detail by id

```http
  GET /todo/:id
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `JWT Token` |

| params | value                |
| :-------- | :------------------------- |
| `id` | `id of todo` |

#### Edit Todo By Id

```http
  PUT /todo/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo |

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `value`      | `string` | **Required**. value todo |
| `status`      | `boolean` | **Required**. status todo |

#### Delete Todo By Id

```http
  DELETE /todo/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo |

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |


#### Delete All Todo

```http
  POST /todo/delete_all
```

| Headers |  value                       |
| :-------- |  :-------------------------------- |
| `authorization` |  JWT Token |

