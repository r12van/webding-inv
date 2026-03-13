export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      invitations: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          slug: string;
          theme: string;
          status: string;
          published_at: string | null;
          created_at: string;
        };
      };
    };
  };
}
