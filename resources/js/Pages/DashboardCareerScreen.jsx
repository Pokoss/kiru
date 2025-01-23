import Layout from '@/Layouts/components/Layout'
import { useForm } from '@inertiajs/react';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Select, Typography, Input, Option, Textarea } from '@material-tailwind/react';
import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashboardCareerScreen({ careers }) {
    const [size, setSize] = useState(null);
    const handleOpen = (value) => setSize(value);
    const [sizeEdit, setSizeEdit] = useState(null);
    const handleOpenEdit = (value) => setSizeEdit(value);

    const { data, setData, processing, post, reset, errors } = useForm();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // toast.success(data.name)
        post('/dashboard/careers/post', {
            preserveScroll: true, preserveState: true,
            onSuccess: () => {
                //   toast.success('We have received you request, we shall contact you shortly')
                reset();
                setData({})
                handleOpen();
            }
        });

    }


    const customStyles = {
        headRow: {
            style: {
                border: 'none',
            },
        },
        headCells: {
            style: {
                color: '#997400',
                fontSize: '14px',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                outline: '1px solid #FFFFFF',
            },
        },
        pagination: {
            style: {
                border: 'none',
            },
        },
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Details',
            selector: row => row.content,
        },
        ,
        {
            name: 'Added On',
            selector: row => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
        },
        {
            selector: row => <button onClick={() => editEmployee(row.user.name, row.user.email, row.position, row.id)} className='bg-green-600 rounded-md p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </button>
        },

    ];
    const data1 = [
        {
            id: 1,
            name: 'Insect Juice',
            status: 'Beetlejuice',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus deleniti culpa nesciunt animi inventore voluptatem. Accusantium, nam rerum, magni assumenda sint ipsum vero amet itaque alias quasi aliquid vel.',

        },
    ]
    return (
        <div>
            <div>
                <Fragment>
                    <Dialog
                        open={
                            size === "xl"
                        }
                        size={size}
                        handler={handleOpen}
                    >
                        <DialogHeader>
                            <Typography variant="h5" color="blue-gray">
                                Add a Job
                            </Typography>
                        </DialogHeader>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <DialogBody divider className="grid place-items-center gap-4">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 text-primary">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                   </svg> */}




                                <Input label='Title'
                                    value={data.title ?? ''} onChange={e => setData('title', e.target.value)} size='sm'
                                />
                                <Input label='Closes On' type='datetime-local'
                                    value={data.closes ?? ''} onChange={e => setData('closes', e.target.value)} size='sm'
                                />
                                <Input label='Location' 
                                    value={location.title ?? ''} onChange={e => setData('location', e.target.value)} size='sm'
                                />
                                <Textarea label='Description'
                                    value={data.description ?? ''} onChange={e => setData('description', e.target.value)}
                                />

                            </DialogBody>
                            <DialogFooter className="space-x-2">
                                <Button onClick={handleOpen} variant="gradient" color="blue-gray">
                                    Close
                                </Button>


                                <Button type='submit' className='bg-primary'>
                                    Add
                                </Button>
                                <ToastContainer />

                            </DialogFooter>
                        </form>
                    </Dialog>

                </Fragment>
                <DataTable
                    title={'Careers' &&
                        <div className='flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 whitespace-nowrap items-start md:items-center justify-between w-full border-b-2 border-primary pb-3 pt-2'>
                            <span>{'Careers'}</span>
                            <div className='flex space-x-3 items-center md:space-x-5 w-full md:w-1/2 md:justify-end print:hidden'>

                                <Input type='text' label='Search'
                                    //    value={search}
                                    //    onChange={handleSearch}
                                    className='md:w-full' />
                                <span>
                                    <Button size='sm' color='success' type='submit' className='flex h-10 items-center bg-primary'
                                        onClick={() => handleOpen("xl")}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        Add
                                    </Button>
                                </span>
                            </div>
                        </div>
                    }
                    columns={columns}
                    data={careers.data}
                    customStyles={customStyles}
                    pointerOnHover
                    onRowClicked={(row, event) => !children && ExpandableComponent ? null : editRow(row, event)}
                    // progressPending={loading}
                    highlightOnHover
                    pagination
                    paginationServer
                // paginationTotalRows={employees.total}
                // paginationPerPage={employees.per_page}
                // onChangePage={handlePageChange}
                // paginationRowsPerPageOptions={[]}


                // expandOnRowClicked={expandOnRowClicked && ExpandableComponent}
                // expandableRows={ExpandableComponent}
                // expandableRowsComponent={ExpandableComponent}
                // expandableRowExpanded={row=>true}
                />
                <Fragment>
                    <Dialog
                        open={
                            sizeEdit === "xl"
                        }
                        size={sizeEdit}
                        handler={handleOpenEdit}
                    >
                        <DialogHeader>
                            <Typography variant="h5" color="blue-gray">
                                Edit Employee
                            </Typography>
                        </DialogHeader>
                        <form
                        // onSubmit={postEdit}
                        >
                            <DialogBody divider className="grid place-items-center gap-4">


                                <Input label='Name' disabled
                                // value={editName} onChange={(event) => setEditName(event.target.value)} size='sm'
                                />
                                <Input label='Email' disabled
                                // value={editEmployeeEmail} onChange={(event) => setEditEmployeeEmail(event.target.value)} size='sm'
                                />
                                <Select color='deep-orange' label="Position"
                                // value={editPosition} onChange={(e) => setEditPosition(e)}
                                >
                                    <Option value='owner'>owner</Option>
                                    <Option value='admin'>admin</Option>
                                    <Option value='accountant'>accountant</Option>
                                    <Option value='hr'>hr</Option>
                                    <Option value='dispenser'>dispenser</Option>
                                    <Option value='cashier'>cashier</Option>
                                </Select>

                            </DialogBody>
                            <DialogFooter>
                                <div className='flex w-full justify-between'>
                                    <Button
                                        // onClick={postDelete} 
                                        variant="gradient" color="red">
                                        Delete
                                    </Button>
                                    <div className="space-x-2">
                                        <Button
                                            // onClick={handleOpenEdit} 
                                            variant="gradient" color="blue-gray">
                                            Close
                                        </Button>
                                        <Button type='submit' className='bg-primary'>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </DialogFooter>
                        </form>
                    </Dialog>
                </Fragment>

            </div>
        </div>
    )
}
DashboardCareerScreen.layout = page => <Layout children={page} />
export default DashboardCareerScreen