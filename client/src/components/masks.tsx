export function nome(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 60;
    let value = e.currentTarget.value;
    value = value.replace(/\d/g, "");
    e.currentTarget.value = value;
    return e;
}

export function whats(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 11;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    e.currentTarget.value = value;
    return e;
}

export function email(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 100;
    let value = e.currentTarget.value;
    value = value.replace(/[^0-9a-zA-Z\.@_\\s]/, "");
    e.currentTarget.value = value;
    return e;
}