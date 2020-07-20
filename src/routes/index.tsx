import React from "react";
import { Switch, Route } from "react-router-dom";

import { NotFound } from "../pages/not-found";
import { SignIn } from "../pages/auth/sign-in";
import { SignUp } from "../pages/auth/sign-up";
import { Forgot } from "../pages/auth/forgot";

export function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/auth/signin" render={() => <SignIn />} />
        <Route exact path="/auth/signup" render={() => <SignUp />} />
        <Route exact path="/auth/forgot" render={() => <Forgot />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </>
  );
}
