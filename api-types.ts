export interface GetResults{
    data: Welcome[];
}

export interface Welcome {
    img:               string;
    amount:            number;
    asset:             string;
    chain:             Chain;
    referral_earnings: number;
    state:             string;
    type:              string;
    user:              string;
}

export interface Chain {
    img:  string;
    name: string;
}
