export const getAuthUserID = () => {
    if (localStorage.auth) {
      let auth = JSON.parse(localStorage.auth);
      if (auth && auth.userid) return auth.userid;
      return false;
    }
    return false;
  };