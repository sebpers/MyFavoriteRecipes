# recipesBackend
----
* *Assignment in Api:er mot backend EVXFEH 18* 

----

* **All you need to set up this on your computer should be below**
----

* **Start by cloning or downloading the repository**
```
When that is done navigate to the folder and Paste this in your terminal: 
npm install 

This will install all the dependencies you need for this project and give you the latest updates. 
```
----

* **URL**
```
localhost:3000
```


* **CURL**
 ```
we use curl in our terminal to be able to send requests. 
Exampel: curl -X GET "localhost:3000/recipes"  

Exampel: 
curl --help

This will get information about different options you can use with curl
 ```

 * **JQ**
 ```
 We use jq in our request to make it more readable. 
 Install jq by typing this in your terminal: brew install jq
 Now we can do requests that looks nicer
 Exampel: curl -X GET "localhost:3000/recipes"  | jq
 ```





 * **Methods:**

  `GET` | `POST` | `DELETE` | `PUT` | 


 **GET** -recipes
```
Example request: 

curl localhost:3000/recipes | jq

Example response: 

 {
    "_id": "5cfa5145a2f7253b01784960",
    "title": "Sebastians ketchup",
    "ingredients": [
      {
        "_id": "5cfa5145a2f7253b01784965",
        "name": "chilli",
        "amount": 3,
        "unit": "dl"
      },
      {
        "_id": "5cfa5145a2f7253b01784964",
        "name": "chilli klkjklkjklkjhjklk",
        "amount": 3,
        "unit": "dl"
      },
      {
        "_id": "5cfa5145a2f7253b01784963",
        "name": "chilli cbnms babababa x aga xg axgax",
        "amount": 3,
        "unit": "dl"
      },
      {
        "_id": "5cfa5145a2f7253b01784962",
        "name": "chilli cbnms babababa x aga xg axgax",
        "amount": 3,
        "unit": "dl"
      },
      {
        "_id": "5cfa5145a2f7253b01784961",
        "name": "chilli cbnms babababa x aga xg axgax",
        "amount": 3,
        "unit": "dl"
      }
    ],
    "description": "This is the description kalelellelelele"



```
**POST** -recipes
```
Example request in postman: 
{
     "title": "Sebastians ketchup",  
        "ingredients": [{
          "name": "chilli",
          "amount": 3,
          "unit": "dl"
        },
        {
          "name": "chilli klkjklkjklkjhjklk",
          "amount": 3,
          "unit": "dl"
        },
         {
          "name": "chilli cbnms babababa x aga xg axgax",
          "amount": 3,
          "unit": "dl"
        },
         {
          "name": "chilli cbnms babababa x aga xg axgax",
          "amount": 3,
          "unit": "dl"
        },
         {
          "name": "chilli cbnms babababa x aga xg axgax",
          "amount": 3,
          "unit": "dl"
        }
        ],
        "description": "This is the description kalelellelelele"
}

Example response: 



```

**PUT** -recipes

```
Exampel request: 



Example response: 




```
**DELETE** -recipes

```
Exampel request: 


Example response: 

```



