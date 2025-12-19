import { meRequest } from "@/api/me";
import { useQuery } from "react-query";

export const Dashboard = () => {
  const { data: userData } = useQuery({
    queryKey: ["me"],
    queryFn: meRequest,
  });
  return (
    <div>
      <h1>Dashboard</h1>
      {userData && <p>Welcome, {userData.name}!</p>}
    </div>
  );
};
