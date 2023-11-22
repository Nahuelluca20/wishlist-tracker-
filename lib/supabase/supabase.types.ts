export type Json = string | number | boolean | null | {[key: string]: Json | undefined} | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          created_at: string | null;
          hearts: number | null;
          id: string;
          image_url: string | null;
          product_link: string;
          title: string;
        };
        Insert: {
          created_at?: string | null;
          hearts?: number | null;
          id?: string;
          image_url?: string | null;
          product_link: string;
          title: string;
        };
        Update: {
          created_at?: string | null;
          hearts?: number | null;
          id?: string;
          image_url?: string | null;
          product_link?: string;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
