PGDMP         6                 |            inflationGame    15.3 (Debian 15.3-1.pgdg120+1)    15.3 9    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16388    inflationGame    DATABASE     z   CREATE DATABASE "inflationGame" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE "inflationGame";
                postgres    false            �            1259    16438 
   challenges    TABLE     �   CREATE TABLE public.challenges (
    challenge_id integer NOT NULL,
    description text,
    difficulty_level character varying(50),
    reward character varying(255),
    start_date timestamp with time zone,
    end_date timestamp with time zone
);
    DROP TABLE public.challenges;
       public         heap    postgres    false            �            1259    16437    challenges_challenge_id_seq    SEQUENCE     �   CREATE SEQUENCE public.challenges_challenge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.challenges_challenge_id_seq;
       public          postgres    false    221            �           0    0    challenges_challenge_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.challenges_challenge_id_seq OWNED BY public.challenges.challenge_id;
          public          postgres    false    220            �            1259    16480    economic_calendar    TABLE     &  CREATE TABLE public.economic_calendar (
    id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    country character varying(3) NOT NULL,
    indicator text NOT NULL,
    actual numeric,
    previous numeric,
    consensus numeric,
    forecast numeric
);
 %   DROP TABLE public.economic_calendar;
       public         heap    postgres    false            �            1259    16479    economic_calendar_id_seq    SEQUENCE     �   CREATE SEQUENCE public.economic_calendar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.economic_calendar_id_seq;
       public          postgres    false    227            �           0    0    economic_calendar_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.economic_calendar_id_seq OWNED BY public.economic_calendar.id;
          public          postgres    false    226            �            1259    16459    economic_data    TABLE     �   CREATE TABLE public.economic_data (
    id integer NOT NULL,
    data_type character varying(255) NOT NULL,
    value numeric NOT NULL,
    date_updated timestamp without time zone NOT NULL,
    description text
);
 !   DROP TABLE public.economic_data;
       public         heap    postgres    false            �            1259    16458    economic_data_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.economic_data_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.economic_data_id_seq1;
       public          postgres    false    223            �           0    0    economic_data_id_seq1    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.economic_data_id_seq1 OWNED BY public.economic_data.id;
          public          postgres    false    222            �            1259    16470    economiccalendar    TABLE     i  CREATE TABLE public.economiccalendar (
    id integer NOT NULL,
    datetime timestamp with time zone NOT NULL,
    countrycode character varying(3) NOT NULL,
    eventname text NOT NULL,
    actualvalue numeric,
    previousvalue numeric,
    consensusvalue numeric,
    forecastvalue numeric,
    impactlevel integer,
    revisedflag boolean DEFAULT false
);
 $   DROP TABLE public.economiccalendar;
       public         heap    postgres    false            �            1259    16469    economiccalendar_id_seq    SEQUENCE     �   CREATE SEQUENCE public.economiccalendar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.economiccalendar_id_seq;
       public          postgres    false    225            �           0    0    economiccalendar_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.economiccalendar_id_seq OWNED BY public.economiccalendar.id;
          public          postgres    false    224            �            1259    16565    events    TABLE     '  CREATE TABLE public.events (
    event_id integer NOT NULL,
    event_type character varying(255) NOT NULL,
    aggregate_id integer NOT NULL,
    aggregate_type character varying(255) NOT NULL,
    event_data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.events;
       public         heap    postgres    false            �            1259    16564    events_event_id_seq    SEQUENCE     �   CREATE SEQUENCE public.events_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.events_event_id_seq;
       public          postgres    false    233            �           0    0    events_event_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.events_event_id_seq OWNED BY public.events.event_id;
          public          postgres    false    232            �            1259    16415    investments    TABLE     -  CREATE TABLE public.investments (
    investment_id integer NOT NULL,
    player_id integer NOT NULL,
    asset_type character varying(100) NOT NULL,
    amount_invested numeric(10,2) NOT NULL,
    current_value numeric(10,2),
    investment_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.investments;
       public         heap    postgres    false            �            1259    16414    investments_investment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.investments_investment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.investments_investment_id_seq;
       public          postgres    false    219            �           0    0    investments_investment_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.investments_investment_id_seq OWNED BY public.investments.investment_id;
          public          postgres    false    218            �            1259    16489    jobboard    TABLE     �  CREATE TABLE public.jobboard (
    jobid integer NOT NULL,
    jobtitle character varying(255) NOT NULL,
    averagehourlypay numeric,
    averageweeklypay numeric,
    averageannualpay numeric,
    skilllevel character varying(50),
    experiencelevel character varying(50),
    averagehoursperweek numeric,
    totalpositions integer,
    filledpositions integer DEFAULT 0,
    vacantpositions integer
);
    DROP TABLE public.jobboard;
       public         heap    postgres    false            �            1259    16488    jobboard_jobid_seq    SEQUENCE     �   CREATE SEQUENCE public.jobboard_jobid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.jobboard_jobid_seq;
       public          postgres    false    229            �           0    0    jobboard_jobid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.jobboard_jobid_seq OWNED BY public.jobboard.jobid;
          public          postgres    false    228            �            1259    16515    player_outgoings    TABLE     �  CREATE TABLE public.player_outgoings (
    player_id integer NOT NULL,
    weekly_housing numeric(10,2) DEFAULT 50.00,
    monthly_housing numeric(10,2) DEFAULT 200.00,
    annual_housing numeric(10,2) DEFAULT 2400.00,
    weekly_transport numeric(10,2) DEFAULT 20.00,
    monthly_transport numeric(10,2) DEFAULT 80.00,
    annual_transport numeric(10,2) DEFAULT 960.00,
    weekly_food numeric(10,2) DEFAULT 40.00,
    monthly_food numeric(10,2) DEFAULT 160.00,
    annual_food numeric(10,2) DEFAULT 1920.00,
    weekly_utilities numeric(10,2) DEFAULT 20.00,
    monthly_utilities numeric(10,2) DEFAULT 80.00,
    annual_utilities numeric(10,2) DEFAULT 960.00,
    weekly_recreation numeric(10,2) DEFAULT 10.00,
    monthly_recreation numeric(10,2) DEFAULT 40.00,
    annual_recreation numeric(10,2) DEFAULT 480.00,
    weekly_restaurants numeric(10,2) DEFAULT 10.00,
    monthly_restaurants numeric(10,2) DEFAULT 40.00,
    annual_restaurants numeric(10,2) DEFAULT 480.00,
    weekly_household numeric(10,2) DEFAULT 10.00,
    monthly_household numeric(10,2) DEFAULT 40.00,
    annual_household numeric(10,2) DEFAULT 480.00,
    weekly_council_tax numeric(10,2) DEFAULT 10.00,
    monthly_council_tax numeric(10,2) DEFAULT 40.00,
    annual_council_tax numeric(10,2) DEFAULT 480.00,
    weekly_communications numeric(10,2) DEFAULT 10.00,
    monthly_communications numeric(10,2) DEFAULT 40.00,
    annual_communications numeric(10,2) DEFAULT 480.00,
    weekly_insurance numeric(10,2) DEFAULT 5.00,
    monthly_insurance numeric(10,2) DEFAULT 20.00,
    annual_insurance numeric(10,2) DEFAULT 240.00,
    weekly_other numeric(10,2) DEFAULT 10.00,
    monthly_other numeric(10,2) DEFAULT 40.00,
    annual_other numeric(10,2) DEFAULT 480.00,
    weekly_education numeric(10,2) DEFAULT 0.00,
    monthly_education numeric(10,2) DEFAULT 0.00,
    annual_education numeric(10,2) DEFAULT 0.00,
    weekly_licences_fines numeric(10,2) DEFAULT 0.00,
    monthly_licences_fines numeric(10,2) DEFAULT 0.00,
    annual_licences_fines numeric(10,2) DEFAULT 0.00,
    weekly_holiday_spending numeric(10,2) DEFAULT 0.00,
    monthly_holiday_spending numeric(10,2) DEFAULT 0.00,
    annual_holiday_spending numeric(10,2) DEFAULT 0.00
);
 $   DROP TABLE public.player_outgoings;
       public         heap    postgres    false            �            1259    16514    player_outgoings_player_id_seq    SEQUENCE     �   CREATE SEQUENCE public.player_outgoings_player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.player_outgoings_player_id_seq;
       public          postgres    false    231            �           0    0    player_outgoings_player_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.player_outgoings_player_id_seq OWNED BY public.player_outgoings.player_id;
          public          postgres    false    230            �            1259    16390    players    TABLE     �  CREATE TABLE public.players (
    player_id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255),
    current_balance numeric(10,2),
    total_income numeric(10,2),
    total_savings numeric(10,2),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    last_login timestamp with time zone,
    password character varying(255) NOT NULL,
    skill character varying(50) DEFAULT 'Low'::character varying,
    experience character varying(50) DEFAULT 'Entry-Level'::character varying,
    employment_status character varying(50) DEFAULT 'Unemployed'::character varying,
    health integer DEFAULT 100
);
    DROP TABLE public.players;
       public         heap    postgres    false            �            1259    16389    players_player_id_seq    SEQUENCE     �   CREATE SEQUENCE public.players_player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.players_player_id_seq;
       public          postgres    false    215            �           0    0    players_player_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.players_player_id_seq OWNED BY public.players.player_id;
          public          postgres    false    214            �            1259    16400    transactions    TABLE       CREATE TABLE public.transactions (
    transaction_id integer NOT NULL,
    player_id integer NOT NULL,
    type character varying(50) NOT NULL,
    amount numeric(10,2) NOT NULL,
    description text,
    transaction_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.transactions;
       public         heap    postgres    false            �            1259    16399    transactions_transaction_id_seq    SEQUENCE     �   CREATE SEQUENCE public.transactions_transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.transactions_transaction_id_seq;
       public          postgres    false    217            �           0    0    transactions_transaction_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.transactions_transaction_id_seq OWNED BY public.transactions.transaction_id;
          public          postgres    false    216            �           2604    16441    challenges challenge_id    DEFAULT     �   ALTER TABLE ONLY public.challenges ALTER COLUMN challenge_id SET DEFAULT nextval('public.challenges_challenge_id_seq'::regclass);
 F   ALTER TABLE public.challenges ALTER COLUMN challenge_id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    16483    economic_calendar id    DEFAULT     |   ALTER TABLE ONLY public.economic_calendar ALTER COLUMN id SET DEFAULT nextval('public.economic_calendar_id_seq'::regclass);
 C   ALTER TABLE public.economic_calendar ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    16462    economic_data id    DEFAULT     u   ALTER TABLE ONLY public.economic_data ALTER COLUMN id SET DEFAULT nextval('public.economic_data_id_seq1'::regclass);
 ?   ALTER TABLE public.economic_data ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    16473    economiccalendar id    DEFAULT     z   ALTER TABLE ONLY public.economiccalendar ALTER COLUMN id SET DEFAULT nextval('public.economiccalendar_id_seq'::regclass);
 B   ALTER TABLE public.economiccalendar ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16568    events event_id    DEFAULT     r   ALTER TABLE ONLY public.events ALTER COLUMN event_id SET DEFAULT nextval('public.events_event_id_seq'::regclass);
 >   ALTER TABLE public.events ALTER COLUMN event_id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    16418    investments investment_id    DEFAULT     �   ALTER TABLE ONLY public.investments ALTER COLUMN investment_id SET DEFAULT nextval('public.investments_investment_id_seq'::regclass);
 H   ALTER TABLE public.investments ALTER COLUMN investment_id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16492    jobboard jobid    DEFAULT     p   ALTER TABLE ONLY public.jobboard ALTER COLUMN jobid SET DEFAULT nextval('public.jobboard_jobid_seq'::regclass);
 =   ALTER TABLE public.jobboard ALTER COLUMN jobid DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    16518    player_outgoings player_id    DEFAULT     �   ALTER TABLE ONLY public.player_outgoings ALTER COLUMN player_id SET DEFAULT nextval('public.player_outgoings_player_id_seq'::regclass);
 I   ALTER TABLE public.player_outgoings ALTER COLUMN player_id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    16393    players player_id    DEFAULT     v   ALTER TABLE ONLY public.players ALTER COLUMN player_id SET DEFAULT nextval('public.players_player_id_seq'::regclass);
 @   ALTER TABLE public.players ALTER COLUMN player_id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    16403    transactions transaction_id    DEFAULT     �   ALTER TABLE ONLY public.transactions ALTER COLUMN transaction_id SET DEFAULT nextval('public.transactions_transaction_id_seq'::regclass);
 J   ALTER TABLE public.transactions ALTER COLUMN transaction_id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2606    16445    challenges challenges_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_pkey PRIMARY KEY (challenge_id);
 D   ALTER TABLE ONLY public.challenges DROP CONSTRAINT challenges_pkey;
       public            postgres    false    221            �           2606    16487 (   economic_calendar economic_calendar_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.economic_calendar
    ADD CONSTRAINT economic_calendar_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.economic_calendar DROP CONSTRAINT economic_calendar_pkey;
       public            postgres    false    227            �           2606    16468 7   economic_data economic_data_data_type_date_updated_key1 
   CONSTRAINT     �   ALTER TABLE ONLY public.economic_data
    ADD CONSTRAINT economic_data_data_type_date_updated_key1 UNIQUE (data_type, date_updated);
 a   ALTER TABLE ONLY public.economic_data DROP CONSTRAINT economic_data_data_type_date_updated_key1;
       public            postgres    false    223    223            �           2606    16466 !   economic_data economic_data_pkey1 
   CONSTRAINT     _   ALTER TABLE ONLY public.economic_data
    ADD CONSTRAINT economic_data_pkey1 PRIMARY KEY (id);
 K   ALTER TABLE ONLY public.economic_data DROP CONSTRAINT economic_data_pkey1;
       public            postgres    false    223            �           2606    16478 &   economiccalendar economiccalendar_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.economiccalendar
    ADD CONSTRAINT economiccalendar_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.economiccalendar DROP CONSTRAINT economiccalendar_pkey;
       public            postgres    false    225            �           2606    16573    events events_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);
 <   ALTER TABLE ONLY public.events DROP CONSTRAINT events_pkey;
       public            postgres    false    233            �           2606    16421    investments investments_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.investments
    ADD CONSTRAINT investments_pkey PRIMARY KEY (investment_id);
 F   ALTER TABLE ONLY public.investments DROP CONSTRAINT investments_pkey;
       public            postgres    false    219            �           2606    16496    jobboard jobboard_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.jobboard
    ADD CONSTRAINT jobboard_pkey PRIMARY KEY (jobid);
 @   ALTER TABLE ONLY public.jobboard DROP CONSTRAINT jobboard_pkey;
       public            postgres    false    229            �           2606    16562 &   player_outgoings player_outgoings_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.player_outgoings
    ADD CONSTRAINT player_outgoings_pkey PRIMARY KEY (player_id);
 P   ALTER TABLE ONLY public.player_outgoings DROP CONSTRAINT player_outgoings_pkey;
       public            postgres    false    231            �           2606    16398    players players_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (player_id);
 >   ALTER TABLE ONLY public.players DROP CONSTRAINT players_pkey;
       public            postgres    false    215            �           2606    16408    transactions transactions_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id);
 H   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transactions_pkey;
       public            postgres    false    217                       2606    16422 &   investments investments_player_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.investments
    ADD CONSTRAINT investments_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(player_id);
 P   ALTER TABLE ONLY public.investments DROP CONSTRAINT investments_player_id_fkey;
       public          postgres    false    215    3307    219                        2606    16409 (   transactions transactions_player_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(player_id);
 R   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transactions_player_id_fkey;
       public          postgres    false    217    215    3307           