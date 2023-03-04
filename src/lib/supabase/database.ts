export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      models: {
        Row: {
          birth_place: string | null;
          created_at: string | null;
          date_of_birth: string | null;
          description: string | null;
          has_info_tags: boolean | null;
          height: string | null;
          highlight: string | null;
          id: number;
          label: string | null;
          measurements: string | null;
          model_id: string | null;
          name: string;
          poster: string;
          published: boolean | null;
          published_at: string | null;
          rating: string | null;
          sex: Json | null;
          tags: Json | null;
          trend: Json | null;
          updated_at: string | null;
          value: string | null;
        };
        Insert: {
          birth_place?: string | null;
          created_at?: string | null;
          date_of_birth?: string | null;
          description?: string | null;
          has_info_tags?: boolean | null;
          height?: string | null;
          highlight?: string | null;
          id?: number;
          label?: string | null;
          measurements?: string | null;
          model_id?: string | null;
          name?: string;
          poster?: string;
          published?: boolean | null;
          published_at?: string | null;
          rating?: string | null;
          sex?: Json | null;
          tags?: Json | null;
          trend?: Json | null;
          updated_at?: string | null;
          value?: string | null;
        };
        Update: {
          birth_place?: string | null;
          created_at?: string | null;
          date_of_birth?: string | null;
          description?: string | null;
          has_info_tags?: boolean | null;
          height?: string | null;
          highlight?: string | null;
          id?: number;
          label?: string | null;
          measurements?: string | null;
          model_id?: string | null;
          name?: string;
          poster?: string;
          published?: boolean | null;
          published_at?: string | null;
          rating?: string | null;
          sex?: Json | null;
          tags?: Json | null;
          trend?: Json | null;
          updated_at?: string | null;
          value?: string | null;
        };
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          email: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          email?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
      };
      'user-favorites': {
        Row: {
          added_at: string | null;
          id: number;
          user_id: string | null;
          video_id: number | null;
        };
        Insert: {
          added_at?: string | null;
          id?: number;
          user_id?: string | null;
          video_id?: number | null;
        };
        Update: {
          added_at?: string | null;
          id?: number;
          user_id?: string | null;
          video_id?: number | null;
        };
      };
      'user-liked-videos': {
        Row: {
          added_at: string | null;
          id: number;
          user_id: string | null;
          video_id: number | null;
        };
        Insert: {
          added_at?: string | null;
          id?: number;
          user_id?: string | null;
          video_id?: number | null;
        };
        Update: {
          added_at?: string | null;
          id?: number;
          user_id?: string | null;
          video_id?: number | null;
        };
      };
      videos: {
        Row: {
          categories: Json | null;
          created_at: string | null;
          date: string | null;
          description: string | null;
          highlight: string | null;
          id: number;
          main_category: Json | null;
          models: Json | null;
          popularity: string | null;
          published: boolean | null;
          published_at: string | null;
          rating: string | null;
          section: Json | null;
          tags: Json | null;
          teaser: string | null;
          thumbnail: string | null;
          title: string | null;
          trend: Json | null;
          updated_at: string | null;
          video_id: string | null;
          views: string | null;
        };
        Insert: {
          categories?: Json | null;
          created_at?: string | null;
          date?: string | null;
          description?: string | null;
          highlight?: string | null;
          id?: number;
          main_category?: Json | null;
          models?: Json | null;
          popularity?: string | null;
          published?: boolean | null;
          published_at?: string | null;
          rating?: string | null;
          section?: Json | null;
          tags?: Json | null;
          teaser?: string | null;
          thumbnail?: string | null;
          title?: string | null;
          trend?: Json | null;
          updated_at?: string | null;
          video_id?: string | null;
          views?: string | null;
        };
        Update: {
          categories?: Json | null;
          created_at?: string | null;
          date?: string | null;
          description?: string | null;
          highlight?: string | null;
          id?: number;
          main_category?: Json | null;
          models?: Json | null;
          popularity?: string | null;
          published?: boolean | null;
          published_at?: string | null;
          rating?: string | null;
          section?: Json | null;
          tags?: Json | null;
          teaser?: string | null;
          thumbnail?: string | null;
          title?: string | null;
          trend?: Json | null;
          updated_at?: string | null;
          video_id?: string | null;
          views?: string | null;
        };
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
