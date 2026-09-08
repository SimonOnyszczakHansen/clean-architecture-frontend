// shape of the raw JSON the backend sends back from /api/users
export interface RegisterResponseDto {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
}