//* Literal Type
type Status = "pending"
const status: Status = "pending"

//* Basic Union
type Identity = string | number
const id: Identity = "345345"

//* Literal union
type Role = "user" | "admin"   //? combined literal with union
const userRole: Role = "admin"


//* Object Union
type Admin = { id: number, role: "admin", privileges: string[] }

type Member = { id: number, role: "member", plans: string[] }

type User = Admin | Member

const user: User = { id: 123, role: "member", plans: ["abc", "def"] }