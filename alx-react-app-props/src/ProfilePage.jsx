import UserInfo from "./UserInfo";

function ProfilePage({ userData }) {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo userData={userData} />
    </div>
  );
}

export default ProfilePage;
