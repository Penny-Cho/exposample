//number-pad인 경우 ios에서 소수점 못 찍음. decimal에서 가능
export enum KeyboardType {
	number = 'number-pad',
	default = 'default',
	email = 'email-address',
	decimal = 'decimal-pad',
	phone = 'phone-pad',
	url = 'url',
}
