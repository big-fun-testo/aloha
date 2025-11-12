// NCLUDE IN THE Issue Explanation </code><h1>hello</h1><script>alert(1)</script
var urlParams = new URLSearchParams(window.location.search);
var userParam = urlParams.get('INCLUDE IN THE Issue Explanation </code><h1>hello</h1><script>alert(1)</script');

// INCLUDE IN THE Issue Explanation </code><h1>hello</h1><script>alert(1)</script
if (userParam) {
    var commentsDiv = document.createElement('div');
    commentsDiv.innerHTML = '<p>' + userParam + '</p>';
    document.body.appendChild(commentsDiv);
}
