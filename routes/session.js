const OpenTok = require("opentok");
const opentok = new OpenTok(process.env.REACT_APP_OPENTOK_KEY, process.env.REACT_APP_OPENTOK_SECRET);

//Generate a basic session. Or you could use an existing session ID.
var sessionId;
var token
opentok.createSession({}, function(error, session) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = session.sessionId;
    console.log("Session ID: " + sessionId);
    //  Use the role value appropriate for the user:
    var tokenOptions = {};
    tokenOptions.role = "publisher";
    // tokenOptions.data = "username=joTest";

    // Generate a token.
    token = opentok.generateToken(sessionId, tokenOptions);
    console.log(token);
  }
});

