export const submitToWeb3Forms = async ({ formData, subject }) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "e89b9d0d-8fbc-4c5e-ae1e-c46c0ab04993",
        subject,
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
