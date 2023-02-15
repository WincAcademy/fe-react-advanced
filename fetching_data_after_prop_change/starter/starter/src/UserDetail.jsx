export const UserDetail = ({ user }) => {
  return (
    <div className="user-details">
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};
