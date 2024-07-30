<script setup lang="ts">
import {
  useTokenClient,
  type AuthCodeFlowSuccessResponse,
  type AuthCodeFlowErrorResponse,
} from "vue3-google-signin";
import { useOneTap, type CredentialResponse } from "vue3-google-signin";

const handleOnSuccess = (response: AuthCodeFlowSuccessResponse) => {
  console.log("Access Token: ", response.access_token);
  const accessToken = response.access_token;
  console.log(response)

  // URL для получения данных пользователя
  const url = "https://www.googleapis.com/oauth2/v3/userinfo";

  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
};

const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});



// const { isReady, login } = useOneTap({
//   disableAutomaticPrompt: true,
//   onSuccess: (response: CredentialResponse) => {
//     console.log("Success:", response);
//   },
//   onError: () => console.error("Error with One Tap Login"),
//   // options
// });
</script>

<template>
  <button :disabled="!isReady" @click="() => login()">Login with Google</button>
<!--  <button :disabled="!isReady" @click="() => login()">-->
<!--    Trigger One Tap Login Manually-->
<!--  </button>-->
</template>
