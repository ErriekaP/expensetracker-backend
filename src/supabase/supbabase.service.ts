import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabaseUrl = process.env.SUPABASE_URL;
  private supabaseKey = process.env.SUPABASE_KEY;
  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  getClient() {
    return this.supabase;
  }
}
