import { useState, useEffect } from "react";
import * as usersAPI from "../../utilities/users-api";
import { Link } from 'react-router-dom';

export default function AllOrgsPage() {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const fetchAllOrgs = async () => {
      try {
        const data = await usersAPI.getAll('/api/users/orgs');
        setOrgs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllOrgs();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <div className="index-wrap">
        <h1>All Orgs Page</h1>
        <div className="list-group">
          {orgs.map((org) => (
              <Link className="card org-card" to={`/orgs/${org._id}`} key={org._id}>
                <div className="org-card-photo">
                  <img src={`${org.photoUrl}`} alt={`${org.name}`} />
                </div>
                <div className="org-card-info">
                  <h3>{org.name}</h3>
                  <span>{org.location}</span>
                </div>
              </Link>  
            ))}
        </div>
      </div>
    </>
  );
}
