import "./MemberCard.css";

const MemberCard = ({ imgSrc, name, studentId, generation, role, instagram }) => {
  return (
    <div className="member-card">
      {/* 프로필 이미지 */}
      <div className="image-wrapper">
        <img src={imgSrc} alt={`${name} 프로필`} className="profile-img" />

        {/* 위쪽 직책 뱃지 */}
        {role && <span className="role-badge">{role}</span>}

        {/* 아래쪽 기수 뱃지 */}
        {generation && (
          <span
            className={`gen-badge ${generation === "2기"
              ? "gen-2"
              : generation === "3기"
                ? "gen-3"
                : ""
              }`}
          >
            {generation}
          </span>
        )}
      </div>
      {/* 이름 + 학번 */}
      <p className="member-id">{studentId} {name}</p>

        {/*인스타그램*/}
        {instagram && (
          <a
            href={`https://instagram.com/${instagram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="member-instagram"
          >
            {instagram}
          </a>
        )}
      </div>
  );
};

export default MemberCard;
