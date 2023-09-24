export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      episode_chunks: {
        Row: {
          content: string | null
          embedding: string | null
          episode_id: number
          etl_time: string
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          episode_id: number
          etl_time: string
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          episode_id?: number
          etl_time?: string
          id?: number
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "episode_chunks_episode_id_fkey"
            columns: ["episode_id"]
            referencedRelation: "episodes"
            referencedColumns: ["id"]
          }
        ]
      }
      episodes: {
        Row: {
          available: boolean
          description: string
          etl_time: string
          id: number
          original_audio_url: string
          podcast_id: number
          public_audio_key: string
          public_audio_url: string
          published_date: string
          title: string
        }
        Insert: {
          available: boolean
          description: string
          etl_time: string
          id?: number
          original_audio_url: string
          podcast_id: number
          public_audio_key: string
          public_audio_url: string
          published_date: string
          title: string
        }
        Update: {
          available?: boolean
          description?: string
          etl_time?: string
          id?: number
          original_audio_url?: string
          podcast_id?: number
          public_audio_key?: string
          public_audio_url?: string
          published_date?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "episodes_podcast_id_fkey"
            columns: ["podcast_id"]
            referencedRelation: "podcasts"
            referencedColumns: ["id"]
          }
        ]
      }
      podcasts: {
        Row: {
          copyright: string | null
          description: string
          etl_time: string
          id: number
          original_image_url: string
          original_rss_url: string
          original_web_url: string
          public_image_key: string
          public_image_url: string
          title: string
        }
        Insert: {
          copyright?: string | null
          description: string
          etl_time: string
          id?: number
          original_image_url: string
          original_rss_url: string
          original_web_url: string
          public_image_key: string
          public_image_url: string
          title: string
        }
        Update: {
          copyright?: string | null
          description?: string
          etl_time?: string
          id?: number
          original_image_url?: string
          original_rss_url?: string
          original_web_url?: string
          public_image_key?: string
          public_image_url?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      match_episode_chunks: {
        Args: {
          query_embedding: string
          match_count: number
        }
        Returns: {
          id: number
          content: string
          metadata: Json
          embedding: string
          similarity: number
        }[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
