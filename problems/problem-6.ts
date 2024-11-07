interface Profile {
  name: string;
  age: number;
  email: string;
}
type PartialObject = Partial<Profile>;

function updateProfile(profile: Profile, updatedData: PartialObject): Profile {
  const updateProfileInfo = { ...profile, ...updatedData };
  return updateProfileInfo;
}

const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@gmail.com",
};

const myUpdatedProfile = updateProfile(myProfile, { age: 26 });
