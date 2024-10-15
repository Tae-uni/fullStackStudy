import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";
import { User } from "../mongoose/schemas/user.mjs";
import { comparePassword } from "../utils/helpers.mjs";

// Once when user login it save in server-session.
passport.serializeUser((user, done) => {
  console.log(`Inside Serialize User`);
  console.log(user);
  done(null, user.id);
});

// After once you logged in, this function will active.
passport.deserializeUser(async (id, done) => {
  console.log(`Inside Deserializer`);
  console.log(`Deserializing User ID: ${id}`);
  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("User not found");
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    // console.log(`Username: ${username}`);
    // console.log(`Password: ${password}`);
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) {
        throw new Error("User not found");
      }
      if (!comparePassword(password, findUser.password)) {
        throw new Error("Bad Credentials");
      }
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);