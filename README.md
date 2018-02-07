# dice-as-a-service

### What is it?
Node.js microservice for rolling dice.

### Why?
For fun. No other reason. The concept doesn't make sense.

[React Client Demo](https://rolld.herokuapp.com) + [Demo Source Code](https://github.com/mattlgroff/dice-roll-client)

### How do I use it?
Make a POST request to the server, like so:
```
$.post( "https://rolld.herokuapp.com/api/4d6", function(data) {
  console.log(data)
})
```

Or use something like my demo above.

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

