export const getPrivacyPolicies = async () => {
  try {
    const response = await fetch(
      "https://cms.govo.tech/api/privacy-policies?populate=deep",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getTerms = async () => {
  try {
    const response = await fetch(
      "https://cms.govo.tech/api/terms?populate=deep",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
