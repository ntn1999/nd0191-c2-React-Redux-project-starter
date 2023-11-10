import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  const listUsers = Object.values(users).map((user) => ({
    ...user,
    answeredCount: Object.values(user.answers).length,
    questionsCount: user.questions.length,
  }));

  listUsers.sort(
    (a, b) =>
      b.answeredCount + b.questionsCount - a.answeredCount - a.questionsCount
  );

  return (
    <div className="leaderboard">
      <table className="table" data-testid="leaderboard">
        <thead>
          <tr>
            <th scope="col">Users</th>
            <th scope="col">Answered</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item) => (
            <tr key={item.id} data-testid="user">
              <td>
                <div className="d-flex">
                  <div className="mt-2 mx-2">
                    <img
                      src={item.avatarURL}
                      alt="image"
                      width={30}
                      height={30}
                      aria-hidden
                      className="rounded-circle"
                    ></img>
                  </div>
                  <div>
                    <div>
                      <div className="fw-bold">{item.name}</div>
                      <div>{item.id}</div>
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.answeredCount}</td>
              <td>{item.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Leaderboard);
