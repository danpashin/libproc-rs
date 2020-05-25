var searchIndex = JSON.parse('{\
"dmesg":{"doc":"A `dmesg` command that is a simple demonstration program…","i":[[5,"main","dmesg","",null,[[]]]],"p":[]},\
"libproc":{"doc":"`libproc` is a library for getting information about…","i":[[0,"libproc","libproc","`libproc` module provides library methods for getting…",null,null],[0,"proc_pid","libproc::libproc","Get basic information about processes by PID",null,null],[3,"ListThreads","libproc::libproc::proc_pid","",null,null],[4,"ProcType","","The `ProcType` type. Used to specify what type of…",null,null],[13,"ProcAllPIDS","","",0,null],[13,"ProcPGRPOnly","","",0,null],[13,"ProcTTYOnly","","",0,null],[13,"ProcUIDOnly","","",0,null],[13,"ProcRUIDOnly","","",0,null],[13,"ProcPPIDOnly","","",0,null],[4,"PidInfoFlavor","","An enum used to specify what type of information about a…",null,null],[13,"ListFDs","","",1,null],[13,"TaskAllInfo","","",1,null],[13,"TBSDInfo","","",1,null],[13,"TaskInfo","","",1,null],[13,"ThreadInfo","","",1,null],[13,"ListThreads","","",1,null],[13,"RegionInfo","","",1,null],[13,"RegionPathInfo","","",1,null],[13,"VNodePathInfo","","",1,null],[13,"ThreadPathInfo","","",1,null],[13,"PathInfo","","",1,null],[13,"WorkQueueInfo","","",1,null],[4,"PidInfo","","The `PidInfo` enum contains a piece of information about a…",null,null],[13,"ListFDs","","File Descriptors used by Process",2,null],[13,"TaskAllInfo","","",2,null],[13,"TBSDInfo","","",2,null],[13,"TaskInfo","","",2,null],[13,"ThreadInfo","","",2,null],[13,"ListThreads","","A list of Thread IDs",2,null],[13,"RegionInfo","","",2,null],[13,"RegionPathInfo","","",2,null],[13,"VNodePathInfo","","",2,null],[13,"ThreadPathInfo","","",2,null],[13,"PathInfo","","The path of the executable being run as the process",2,null],[13,"WorkQueueInfo","","",2,null],[5,"listpids","","",null,[[["proctype",4]],[["vec",3],["result",4],["string",3]]]],[5,"pidinfo","","",null,[[],[["pidinfo",8],["string",3],["result",4]]]],[5,"regionfilename","","",null,[[],[["result",4],["string",3]]]],[5,"pidpath","","",null,[[],[["result",4],["string",3]]]],[5,"libversion","","",null,[[],[["result",4],["string",3]]]],[5,"name","","",null,[[],[["result",4],["string",3]]]],[5,"listpidinfo","","",null,[[],[["string",3],["vec",3],["result",4]]]],[5,"pidcwd","","",null,[[["pid_t",6]],[["result",4],["string",3],["pathbuf",3]]]],[5,"cwdself","","Gets path of current working directory for the current…",null,[[],[["result",4],["string",3],["pathbuf",3]]]],[5,"am_root","","",null,[[]]],[8,"PIDInfo","","",null,null],[10,"flavor","","",3,[[],["pidinfoflavor",4]]],[8,"ListPIDInfo","","",null,null],[16,"Item","","",4,null],[10,"flavor","","",4,[[],["pidinfoflavor",4]]],[0,"work_queue_info","libproc::libproc","Information about Work Queues - very MacOS specific",null,null],[3,"WorkQueueInfo","libproc::libproc::work_queue_info","",null,null],[12,"pwq_nthreads","","",5,null],[12,"pwq_runthreads","","",5,null],[12,"pwq_blockedthreads","","",5,null],[12,"reserved","","",5,null],[0,"thread_info","libproc::libproc","Information about Threads runing inside processes",null,null],[3,"ThreadInfo","libproc::libproc::thread_info","",null,null],[12,"pth_user_time","","",6,null],[12,"pth_system_time","","",6,null],[12,"pth_cpu_usage","","",6,null],[12,"pth_policy","","",6,null],[12,"pth_run_state","","",6,null],[12,"pth_flags","","",6,null],[12,"pth_sleep_time","","",6,null],[12,"pth_curpri","","",6,null],[12,"pth_priority","","",6,null],[12,"pth_maxpriority","","",6,null],[12,"pth_name","","",6,null],[0,"task_info","libproc::libproc","Information about Tasks - very MacOS specific",null,null],[3,"TaskInfo","libproc::libproc::task_info","",null,null],[12,"pti_virtual_size","","",7,null],[12,"pti_resident_size","","",7,null],[12,"pti_total_user","","",7,null],[12,"pti_total_system","","",7,null],[12,"pti_threads_user","","",7,null],[12,"pti_threads_system","","",7,null],[12,"pti_policy","","",7,null],[12,"pti_faults","","",7,null],[12,"pti_pageins","","",7,null],[12,"pti_cow_faults","","",7,null],[12,"pti_messages_sent","","",7,null],[12,"pti_messages_received","","",7,null],[12,"pti_syscalls_mach","","",7,null],[12,"pti_syscalls_unix","","",7,null],[12,"pti_csw","","",7,null],[12,"pti_threadnum","","",7,null],[12,"pti_numrunning","","",7,null],[12,"pti_priority","","",7,null],[3,"TaskAllInfo","","",null,null],[12,"pbsd","","",8,null],[12,"ptinfo","","",8,null],[0,"bsd_info","libproc::libproc","BSD specific information - very MacOS specific",null,null],[3,"BSDInfo","libproc::libproc::bsd_info","",null,null],[12,"pbi_flags","","",9,null],[12,"pbi_status","","",9,null],[12,"pbi_xstatus","","",9,null],[12,"pbi_pid","","",9,null],[12,"pbi_ppid","","",9,null],[12,"pbi_uid","","",9,null],[12,"pbi_gid","","",9,null],[12,"pbi_ruid","","",9,null],[12,"pbi_rgid","","",9,null],[12,"pbi_svuid","","",9,null],[12,"pbi_svgid","","",9,null],[12,"rfu_1","","",9,null],[12,"pbi_comm","","",9,null],[12,"pbi_name","","",9,null],[12,"pbi_nfiles","","",9,null],[12,"pbi_pgid","","",9,null],[12,"pbi_pjobc","","",9,null],[12,"e_tdev","","",9,null],[12,"e_tpgid","","",9,null],[12,"pbi_nice","","",9,null],[12,"pbi_start_tvsec","","",9,null],[12,"pbi_start_tvusec","","",9,null],[11,"from","libproc::libproc::proc_pid","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","libproc::libproc::work_queue_info","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","libproc::libproc::thread_info","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","libproc::libproc::task_info","",7,[[]]],[11,"into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","libproc::libproc::bsd_info","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"flavor","libproc::libproc::work_queue_info","",5,[[],["pidinfoflavor",4]]],[11,"flavor","libproc::libproc::thread_info","",6,[[],["pidinfoflavor",4]]],[11,"flavor","libproc::libproc::task_info","",7,[[],["pidinfoflavor",4]]],[11,"flavor","","",8,[[],["pidinfoflavor",4]]],[11,"flavor","libproc::libproc::bsd_info","",9,[[],["pidinfoflavor",4]]],[11,"flavor","libproc::libproc::proc_pid","",10,[[],["pidinfoflavor",4]]],[11,"clone","","",0,[[],["proctype",4]]],[11,"default","libproc::libproc::work_queue_info","",5,[[],["workqueueinfo",3]]],[11,"default","libproc::libproc::thread_info","",6,[[],["threadinfo",3]]],[11,"default","libproc::libproc::task_info","",7,[[],["taskinfo",3]]],[11,"default","","",8,[[],["taskallinfo",3]]],[11,"default","libproc::libproc::bsd_info","",9,[[],["bsdinfo",3]]]],"p":[[4,"ProcType"],[4,"PidInfoFlavor"],[4,"PidInfo"],[8,"PIDInfo"],[8,"ListPIDInfo"],[3,"WorkQueueInfo"],[3,"ThreadInfo"],[3,"TaskInfo"],[3,"TaskAllInfo"],[3,"BSDInfo"],[3,"ListThreads"]]},\
"procinfo":{"doc":"`procinfo` is a simple program to demonstrate the use of…","i":[[5,"getpid","procinfo","",null,[[]]],[5,"procinfo","","",null,[[]]],[5,"main","","",null,[[]]],[0,"c","","",null,null],[5,"getpid","procinfo::c","",null,null]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);