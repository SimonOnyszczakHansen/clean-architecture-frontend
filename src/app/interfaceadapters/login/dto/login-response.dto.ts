// shape of the raw JSON the backend sends back from /api/login
export interface LoginResponseDto {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
}