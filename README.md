### dice-as-a-service

# What is it?
Node.js microservice for rolling dice.

# Why?
For fun. No other reason. The concept doesn't make sense.

[Demo](http://rolld.herokuapp.com)

# How do I use it?
Make a POST request to the server, like so:
```
$.post( "http://rolld.herokuapp.com/4d6", function(data) {
  console.log(data)
})
```

# Example Query:
Make sure the parameter sent are valid, positive integers with a 'd' in between.
```
6d6
```
# Example Response (JSON):
```
{
    "results": {
        "input": "6d6",
        "max": 36,
        "min": 6,
        "results": [
            3,
            3,
            5,
            6,
            4,
            1
        ],
        "total": 22
    }
}
```

