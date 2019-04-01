export interface User {
  rank: {
    curent_rank: number;
    points: number;
    levels: [
        {
            type: number;
            count: number;
        },
        {
            type: number;
            count: number;
        },
        {
            type: number;
            count: number;
        },
        {
            type: number;
            count: number;
        },
        {
            type: number;
            count: number;
        }
    ],
    next_rank: string;
    expert_picks: number;
};
type: string;
avatar: string;
cover: string;
register_date: string;
phone: string;
last_login_date: string;
is_deleted: boolean;
is_deactivated: boolean;
is_blocked: boolean;
email_is_active: boolean;
followers: Array<any>;
paypal_id: string;
glories: Array<any>;
favourites: Array<any>;
followings: Array<any>;
my_images: Array<any>;
vote_power: number;
email_on_every_challenge: boolean;
email_on_comments: boolean;
email_on_likes: boolean;
email_on_new_followers: boolean;
email_on_new_challenges_once_week: boolean;
email_on_comments_reply: boolean;
email_weekly_articles: boolean;
_id: string;
nickname: string;
email: string;
first_name: string;
last_name: string;
full_name: string;
gender_orientation: string;
city: string;
country: string;
date_of_birth_day: string;
date_of_birth_month: string;
date_of_birth_year: string;
register_ip: string;
  }
