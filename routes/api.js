//A dummy database
var data = {
    "posts": [
        {
            "title": "My 0th post!",
            "text": "This is my 0th post!!!"
        },
        {
            "title": "My 1st post!",
            "text": "This is the the first post!!!"
        }
    ]
};

// GET

exports.posts = function (req, res) {
    var posts = [];
    data.posts.forEach(function (post, i) {
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    });
    res.json({
        posts: posts
    });
};

exports.post = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.posts.length) {
        res.json({
            post: data.posts[id]
        });
    } else {
        res.json(false);
    }
};

// POST

exports.addPost = function (req, res) {
    data.posts.push(req.body);
    res.json(req.body);
};

// PUT

exports.editPost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE

exports.deletePost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};