//! `libproc` module provides library methods for getting various types of
//! information about running processes.
//!
//! In the future there will probably be a shorter list of public
//! modules implementing a cleaner and reduced API - built on these
//! methods.
//!

/// Get basic information about processes by PID
pub mod proc_pid;
/// Get messages from the kernel message buffer
pub mod kmesg_buffer;
/// Information about Work Queues - very MacOS specific
pub mod work_queue_info;
/// Information about Threads runing inside processes
pub mod thread_info;
/// Information about Tasks - very MacOS specific
pub mod task_info;
/// BSD specific information - very MacOS specific
pub mod bsd_info;
#[cfg(any(target_os = "macos", target_os = "ios"))]
#[cfg(feature = "macosx_10_9")]
/// Information about Process Resource Usage - added in Mac OS X 10.9
pub mod pid_rusage;
/// Information about Files and File Descriptors used by processes
#[cfg(any(target_os = "macos", target_os = "ios"))]
pub mod file_info;

/// Information about Network usage by a process
#[cfg(any(target_os = "macos", target_os = "ios"))]
pub mod net_info;

mod helpers;