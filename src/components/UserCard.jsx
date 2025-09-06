export default function UserCard({ user, avatarUrl }) {
  const { name, email, phone, website, address, company, username } = user;

//   const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg`;

  const addressLine = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  const websiteHref = website.startsWith("http") ? website : `http://${website}`;

  return (
    <div className="ec-card">
      <div className="row">
        {/* Avatar */}
        <div className="col-auto">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="avatar"
          />
        </div>

        {/* Details */}
        
        <div className="col">
          <h2>{name}</h2>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Company:</strong> {company?.name}</p>
          <p><strong>Website:</strong> {websiteHref}</p>
          <p><strong>Address:</strong> {addressLine}</p>
        </div>
      </div>
    </div>
  );
}
